export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#6b8e23"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Peaceful Forest Path"
        />

        <MoodBoardItem
          color="#4682b4"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Calm Ocean Shore"
        />

        <MoodBoardItem
          color="#d2691e"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Warm Island Sunset"
        />
      </div>
    </div>
  );
}