const API_HYPIXEL_KEY = "89add50e-140a-4413-8d72-1443b07da73c";
const PesquisaButton = document.querySelector("#pesquisa");
const ButtonDownload = document.querySelector("#downloadSkin");

const dadosPartidaBedwars = document.querySelector("#PartidasBedWars");
const dadosVitoriasBedwars = document.querySelector("#VitoriasBedwars");
const dadosCamasQuebradas = document.querySelector("#CamasQuebradas");
const dadosKillsBedwars = document.querySelector("#KillsBedwars");
const dadosFinalKillBedwars = document.querySelector("#FinalKillBedwars");

const PartidasSkyWars = document.querySelector("#PartidasSkyWars");
const KillsSkyWars = document.querySelector("#KillsSkyWars");
const WinsSkyWars = document.querySelector("#WinsSkyWars");
const MortesSkyWars = document.querySelector("#MortesSkyWars");

const PartidasDuels = document.querySelector("#PartidasDuels");
const KillsDuels = document.querySelector("#KillsDuels");
const WinsDuels = document.querySelector("#WinsDuels");
const DamageDuels = document.querySelector("#DamageDuels");

const PartidasBuildBattle = document.querySelector("#PartidasBuildBattle");
const ScoreBuildBattle = document.querySelector("#ScoreBuildBattle");
const MostPoints = document.querySelector("#MostPoints");
const TotalVotos = document.querySelector("#TotalVotos");

const botaofechar = document.querySelector("#botaoFechar");
const voltarLogin = document.querySelector("#voltarLogin");

const card = document.querySelector("#card");
card.style = `display: none`;

voltarLogin.addEventListener("click", loginPage);
botaofechar.addEventListener("click", fecharBloco);
PesquisaButton.addEventListener("click", pesquisa);

function loginPage() {
  window.location.href = "./login.html";
}

function fecharBloco() {
  card.style = `display: none`;
}

function pesquisa() {
  console.log("click");
  InputSearch = document.querySelector("#search").value;
  if (InputSearch != "") {
    getUser(InputSearch);
    return;
  }
  window.alert("Insira algum valor");
}

// FUNCAO CONCLUIDA -- DOWNLOAD SKINS
function downloadSkin(name) {
  fetch(`https://mineskin.eu/download/${name}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.blob();
    })
    .then((blob) => {
      saveAs(blob, `${name}_skin.png`);
    })
    .catch((error) => {
      console.error("Ocorreu um erro:", error);
    });
}

// FUNCAO CONCLUIDA -- PEGAR FOTO PERFIL SKIN
function getUserSkin(Name) {
  const backgroundDiv = document.querySelector("#BackgroundUserImage");
  backgroundDiv.innerHTML = "";

  fetch(`https://mineskin.eu/armor/body/${Name}/100.png`)
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`${resposta.status}`);
      }
      return resposta.blob();
    })
    .then((imagemBlob) => {
      const imgElement = document.createElement("img");
      imgElement.src = URL.createObjectURL(imagemBlob);
      imgElement.alt = "Imagem do jogador";
      imgElement.style = `width: 200px; height:400px`;
      backgroundDiv.appendChild(imgElement);
    })
    .catch((erro) => {
      console.log("deu o seguinte erro: " + erro);
    })
    .finally(() => {
      console.log("requisição finalizada");
    });
}

// FUNCAO PARA PEGAR OS DADOS DOS JOGADORES
function getUser(Name) {
  fetch(`https://api.hypixel.net/player?key=${API_HYPIXEL_KEY}&name=${Name}`)
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error(`${resposta.status}`);
      }
      return resposta.json();
    })

    .then((json) => {
      console.log(json);
      return json;
    })

    .then((json) => {
      const dadosUser = json.player;
      const dadosBedWars = json.player.stats.Bedwars;
      const dadosSkyWars = json.player.stats.SkyWars;
      const dadosDuels = json.player.stats.Duels;
      const dadosBuildBattle = json.player.stats.BuildBattle;

      const dataEntrada = new Date(json.player.firstLogin);
      const dia = dataEntrada.getDate();
      const mes = dataEntrada.getMonth() + 1;
      const ano = dataEntrada.getFullYear();

      // dados user
      const userName = document.querySelector("#nickUserText");
      const dataEntradaText = document.querySelector("#data-entrada");
      userName.textContent = `${dadosUser.displayname}`;
      dataEntradaText.textContent = `${dia}-${mes}-${ano}`;

      // dados bedwars
      const gamesPlayedBedWars = dadosBedWars.games_played_bedwars || 0;
      const bedsBroken = dadosBedWars.beds_broken_bedwars || 0;
      const killsBedwars = dadosBedWars.kills_bedwars || 0;
      const winsBedwars = dadosBedWars.wins_bedwars || 0;
      const finalKills = dadosBedWars.final_kills_bedwars || 0;

      dadosPartidaBedwars.textContent = `jogos =${gamesPlayedBedWars}`;
      dadosVitoriasBedwars.textContent = `vitorias =${winsBedwars}`;
      dadosCamasQuebradas.textContent = `quebradas =${bedsBroken}`;
      dadosKillsBedwars.textContent = `kill =${killsBedwars}`;
      dadosFinalKillBedwars.textContent = `final =${finalKills}`;

      // dados Duels
      const gamesPlayedDuels = dadosDuels.games_played_duels || 0;
      const killsDuels = dadosDuels.kills || 0;
      const winsDuels = dadosDuels.wins || 0;
      const damageDealt = dadosDuels.damage_dealt || 0;

      PartidasDuels.textContent = `Partidas =${gamesPlayedDuels}`;
      KillsDuels.textContent = `Kills =${killsDuels}`;
      WinsDuels.textContent = `Vitorias =${winsDuels}`;
      DamageDuels.textContent = `Dano Causado =${damageDealt}`;

      // dados Sky wars
      const gamesPlayedSkywars = dadosSkyWars.games_played_skywars || 0;
      const killsSkywars = dadosSkyWars.kills || 0;
      const winsSkyawars = dadosSkyWars.wins || 0;
      const deathsSkywars = dadosSkyWars.deaths || 0;

      PartidasSkyWars.textContent = `partidas =${gamesPlayedSkywars}`;
      KillsSkyWars.textContent = `kills =${killsSkywars}`;
      WinsSkyWars.textContent = `wins =${winsSkyawars}`;
      MortesSkyWars.textContent = `Mortes =${deathsSkywars}`;

      // Dados BuildBattle
      const gamesPlayedBuildbattle = dadosBuildBattle.games_played || 0;
      const scoreBuildBattle = dadosBuildBattle.score || 0;
      const soloMostPoints = dadosBuildBattle.solo_most_points || 0;
      const totalVotes = dadosBuildBattle.total_votes || 0;

      PartidasBuildBattle.textContent = `Partidas =${gamesPlayedBuildbattle}`;
      ScoreBuildBattle.textContent = `Score =${scoreBuildBattle}`;
      MostPoints.textContent = `Solo Most Points =${soloMostPoints}`;
      TotalVotos.textContent = `Votos totais =${totalVotes}`;

      ButtonDownload.addEventListener("click", () =>
        downloadSkin(dadosUser.displayname)
      );
      getUserSkin(dadosUser.displayname);
      card.style = `display: flex`;
    })

    .catch((erro) => {
      console.log(" Deu o seguinte erro: " + erro);
      card.style = `display: none`;
      window.alert(
        "usuario nao encontrado e / ou erro 429 - Muitas requisições"
      );
    })

    .finally(() => {
      console.log("terminou a requisiçao");
    });
}
