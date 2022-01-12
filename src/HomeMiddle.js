import Buttons from "./Buttons";
import WritingPost from "./WritingPost";
import Story from "./Story";

const HomeMiddle = () => {
  return (
    <div className="col-md-5 me-3">
      <WritingPost />
      <Buttons />
      <Story
        name="Vikrant Messy"
        date="20 days ago"
        image="/images/StoryDp.jpg"
        story="What did the Dursleys care if Harry lost his place on the House Quiddtich team because he hadn;t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? he Durdleys were what wizards called Muggles (not a drop of magical blood in their veins)..."
      />
      <Story
        name="Vikrant Messy"
        date="20 days ago"
        image="/images/StoryDp.jpg"
        story="What did the Dursleys care if Harry lost his place on the House Quiddtich team because he hadn;t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? he Durdleys were what wizards called Muggles (not a drop of magical blood in their veins)..."
      />
    </div>
  );
};

export default HomeMiddle;
