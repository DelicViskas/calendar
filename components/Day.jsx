export default function Day({num, dayActive}) {
  return (
    <span className={`date${+dayActive === +num ? ' active' : ''}`}>{num}</span>
  )
}