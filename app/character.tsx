export default function Character({ values }) {
  return (
    <div key={values.id}>
      <b>{values.id}</b> {values.name} <b>{values.status}</b>
    </div>
  );
}
