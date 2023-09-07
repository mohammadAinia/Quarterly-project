import './SectionHeader.css'

const SectionHeader = (props) => {
  return (
    <>
      <h2 className="heading">{props.children}</h2>
    </>
  )
}

export default SectionHeader
