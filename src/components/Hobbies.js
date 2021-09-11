const Hobbies = (props) => {
  const {
    hobbies
  } = props;

  return (
    <section>
      <h2>Hobbies</h2>
      <ul>
        {
          hobbies.map(item => (<li>{item}</li>))
        }
      </ul>
    </section>
  )
}

export default Hobbies;