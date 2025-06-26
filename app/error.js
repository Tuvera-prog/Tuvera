'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Попробовать снова</button>
    </div>
  );
}
