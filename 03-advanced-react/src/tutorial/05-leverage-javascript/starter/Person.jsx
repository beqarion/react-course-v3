import avatar from "../../../assets/default-avatar.svg";

export function Person({ name, images, nickName = "ShakeAndBake" }) {
  const imgUrl = images?.[0]?.small?.url || avatar;

  return (
    <li style={{ marginBottom: "3rem" }}>
      <h2>{name}</h2>
      <h3>Nickname: {nickName}</h3>
      <img
        style={{ width: "50px", margin: "0 auto" }}
        className="img"
        src={imgUrl}
        alt={name}
      />
    </li>
  );
}
