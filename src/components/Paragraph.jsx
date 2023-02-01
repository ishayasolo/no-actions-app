import { useRef } from "react";

const Paragraph = () => {
  const textRef = useRef(null);

  const handleCopy = event => {
    event.preventDefault();
    alert('Copying text is not allowed!');
  };

  return (
    <div
      ref={textRef}
      onCopy={handleCopy}
      style={{ maxWidth: '600px', fontSize: "18px" }}
    >
      <p>
        Cats are one of the most beloved pets in the world. They are known for
        their playful and independent nature, and their ability to provide
        companionship and comfort to their owners. Many people are drawn to cats
        because of their soft, fluffy fur and their adorable, expressive faces.
        Cats come in a wide variety of breeds, each with their own unique
        characteristics and personality traits.
      </p>
      <p>
        Cats are also great for people who live in apartments or small homes, as
        they do not take up much space and can be kept indoors. Many cats are
        happy to spend their days lounging around the house, napping and playing
        with their toys.
      </p>
      <p>
        In conclusion, cats make great companions for people of all ages. They
        are low maintenance and can adapt to any living environment. They come
        in a wide variety of breeds, each with their own unique personalities,
        making it easy to find the perfect cat for you. They are also known to
        have therapeutic effects on their owners, reducing stress and anxiety.
      </p>
    </div>
  );
};

export default Paragraph;
