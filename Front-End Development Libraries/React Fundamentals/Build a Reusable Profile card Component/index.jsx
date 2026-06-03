export function Card({ name, title, bio }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p>{bio}</p>
    </div>
  )
}

export function App() {
  const profiles = [
    {
      id: 1,
      name: "Mark",
      title: "Front-End developer",
      bio: "I like to work with different front-end technologies and play video games."
    },
{
      id: 2,
      name: "Tiffany",
      title: "工程经理",
      bio: "我在技术领域工作了 15 年，热衷于帮助人们在这个行业中成长。"
    },{
      id: 3,
      name: "Doug",
      title: "Back-End developer",
      bio: "I have been a software developer for over 20 years and I love working with Go and Rust."
    },
  ];
  return (
    <div className="flex-container">
      {profiles.map((profile) => (
        <Card
          key={profile.id}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
        />
      ))}
    </div>
  );
}