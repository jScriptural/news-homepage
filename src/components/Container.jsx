import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

export default function Container(){
  return (
    <main id="main">
      <section role="group" className="first-group">
	<Top />
	<Middle />
      </section>
      <Bottom />
    </main>
  );
}
