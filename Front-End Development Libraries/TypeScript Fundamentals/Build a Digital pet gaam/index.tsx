const { useState, useEffect } = React;

export enum Action {
  EAT = "EAT",
  PLAY = "PLAY",
  SLEEP = "SLEEP",
}

export enum PetMood {
  HAPPY = "Happy",
  EXCITED = "Excited",
  CONTENT = "Content",
  SAD = "Sad",
  TIRED = "Tired",
  SICK = "Sick",
  HUNGRY = "Hungry",
}

export const petMoodImages: Record<PetMood, string> = {
  [PetMood.HAPPY]: "😊",
  [PetMood.EXCITED]: "🤩",
  [PetMood.CONTENT]: "🙂",
  [PetMood.SAD]: "😢",
  [PetMood.TIRED]: "😴",
  [PetMood.SICK]: "🤒",
  [PetMood.HUNGRY]: "🍽️",
};

interface PetStats {
  hunger: number;
  happiness: number;
  energy: number;
}

const limitStat = (value: number): number => {
  if (value < 0) {
    return 0;
  }

  if (value > 100) {
    return 100;
  }

  return value;
};

export const PetGame = () => {
  const [petName, setPetName] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  const [hunger, setHunger] = useState(0);
  const [happiness, setHappiness] = useState(100);
  const [energy, setEnergy] = useState(100);

  const getPetMood = (): PetMood => {
    if (hunger > 70) {
      return PetMood.HUNGRY;
    }

    if (energy < 30) {
      return PetMood.TIRED;
    }

    if (happiness < 30) {
      return PetMood.SAD;
    }

    if (happiness > 80 && energy > 70) {
      return PetMood.EXCITED;
    }

    if (happiness > 60) {
      return PetMood.HAPPY;
    }

    return PetMood.CONTENT;
  };

  const handleStartGame = (event: any) => {
    event.preventDefault();

    const input = document.getElementById("pet-name") as HTMLInputElement;
    const name = input.value.trim();

    if (name.length === 0) {
      return;
    }

    setPetName(name);
    setIsStarted(true);
  };

  const handleEat = () => {
    setHunger((current) => limitStat(current - 10));
    setEnergy((current) => limitStat(current + 10));
  };

  const handlePlay = () => {
    setEnergy((current) => limitStat(current - 10));
    setHappiness((current) => limitStat(current + 10));
  };

  const handleSleep = () => {
    setHunger((current) => limitStat(current + 10));
    setEnergy((current) => limitStat(current + 10));
  };

  useEffect(() => {
    if (!isStarted) {
      return;
    }

    const idleTimer = window.setInterval(() => {
      setHunger((current) => limitStat(current + 10));
      setEnergy((current) => limitStat(current + 10));
      setHappiness((current) => limitStat(current - 10));
    }, 1000);

    return () => {
      window.clearInterval(idleTimer);
    };
  }, [isStarted]);

  const currentMood = getPetMood();

  if (!isStarted) {
    return (
      <main className="game-container">
        <form onSubmit={handleStartGame}>
          <h1>Digital Pet Game</h1>

          <label htmlFor="pet-name">Name your pet</label>

          <input
            id="pet-name"
            type="text"
            placeholder="Enter pet name"
          />

          <button type="submit">Start Game</button>
        </form>
      </main>
    );
  }

  return (
    <main className="game-container">
      <section className="pet-view">
        <h1 className="pet-name">{petName}</h1>

        <div className="pet-mood">
          <span>{petMoodImages[currentMood]}</span>
          <span>{currentMood}</span>
        </div>

        <div className="stats">
          <div className="stat">
            <span>Hunger</span>
            <span className="stat-value">{hunger}</span>
          </div>

          <div className="stat">
            <span>Energy</span>
            <span className="stat-value">{energy}</span>
          </div>

          <div className="stat">
            <span>Happiness</span>
            <span className="stat-value">{happiness}</span>
          </div>
        </div>

        <div className="actions">
          <button id="eat-action" onClick={handleEat}>
            Eat
          </button>

          <button id="play-action" onClick={handlePlay}>
            Play
          </button>

          <button id="sleep-action" onClick={handleSleep}>
            Sleep
          </button>
        </div>
      </section>
    </main>
  );
};