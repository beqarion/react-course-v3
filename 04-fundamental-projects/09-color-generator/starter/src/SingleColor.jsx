import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText(`#${hex}`);
        await toast.success("Color copied to clipboard");
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : error;
        toast.error(errorMsg);
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };

  return (
    <article
      onClick={saveToClipboard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}
export default SingleColor;
