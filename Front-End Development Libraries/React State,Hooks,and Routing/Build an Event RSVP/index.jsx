const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("");
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [bringingGuests, setBringingGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Number of attendees
          <input
            type="number"
            required
            min="1"
            value={attendees}
            onChange={(event) => setAttendees(event.target.value)}
          />
        </label>

        <label>
          Dietary preferences
          <input
            type="text"
            value={dietaryPreference}
            onChange={(event) => setDietaryPreference(event.target.value)}
          />
        </label>

        <label>
          Bringing additional guests
          <input
            type="checkbox"
            checked={bringingGuests}
            onChange={(event) => setBringingGuests(event.target.checked)}
          />
        </label>

        <button type="submit">Submit RSVP</button>
      </form>

      {submitted && (
        <div>
          <h2>RSVP Submitted!</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of attendees: {attendees}</p>
          <p>
            Dietary preferences:{" "}
            {dietaryPreference ? dietaryPreference : "None"}
          </p>
          <p>
            Bringing additional guests: {bringingGuests ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}