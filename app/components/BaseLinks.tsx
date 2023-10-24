export default function BaseLinks() {
  return (
    <ul>
      <li>
        <a
          target="_blank"
          className="text-blue-600 hover:underline"
          href="https://remix.run/tutorials/blog"
          rel="noreferrer">
          15m Quickstart Blog Tutorial
        </a>
      </li>
      <li>
        <a
          target="_blank"
          className="text-blue-600 hover:underline"
          href="https://remix.run/tutorials/jokes"
          rel="noreferrer">
          Deep Dive Jokes App Tutorial
        </a>
      </li>
      <li>
        <a
          target="_blank"
          className="text-blue-600 hover:underline"
          href="https://remix.run/docs"
          rel="noreferrer">
          Remix Docs
        </a>
      </li>
    </ul>
  );
}
