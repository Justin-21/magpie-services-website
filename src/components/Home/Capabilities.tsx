const items = [{ value: "01", title: "Think strategically", detail: "A clear plan with your brand at the centre." }, { value: "02", title: "Create thoughtfully", detail: "Content and design with something to say." }, { value: "03", title: "Connect meaningfully", detail: "Experiences that turn attention into connection." }, { value: "04", title: "Grow together", detail: "A collaborative team, from first idea to rollout." }];
export default function Capabilities() {
  return <section className="container capabilities" aria-label="Our approach">{items.map(item => <div key={item.value}><span>{item.value}<small> /</small></span><h3>{item.title}</h3><p>{item.detail}</p></div>)}</section>;
}
