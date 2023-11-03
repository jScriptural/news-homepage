import retroPc from "/images/image-retro-pcs.jpg";
import topLaptops from "/images/image-top-laptops.jpg";
import gamingGrowth from "/images/image-gaming-growth.jpg";

let groups = [
  {
    src: retroPc,
    alt: "retro pc",
    tag: "01",
    title: "Reviving Retro PCs",
    summary: "What happens when old PCs are given modern upgrades?",
  },
  {
    src: topLaptops,
    alt: "top laptops",
    tag: "02",
    title: "Top 10 Laptops of 2022",
    summary: "Our best picks for various needs and budgets.",
  },
  {
    src: gamingGrowth,
    alt: "img gaming growth",
    tag: "03",
    title: "The Growth of Gaming",
    summary: "How the pandemic has sparked fresh opportunities",
  },

];
  

export default function Bottom(){
  return (
    <section id="bottom">
      {groups.map((group,i)=>( 
	<div key={i} className="group">
	  <figure>
	    <img src={group.src} alt={group.alt} />
	  </figure>
	  <aside>
	    <h3>{group.tag}</h3>
	    <h4>{group.title}</h4>
	    <p>{group.summary}</p>
	  </aside>
	</div>
      ))} 
    </section>
  );
}
