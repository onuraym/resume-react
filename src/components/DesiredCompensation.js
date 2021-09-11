const DesiredCompensation = (props) => {
  const {
    desiredCompensation
  } = props;

  return (
    <section>
      <h2>Desired compensation</h2>
      <p>Desired compensation: {desiredCompensation} (hourly rate: {desiredCompensation / 20 / 8}</p>
    </section>
  )
}

export default DesiredCompensation;