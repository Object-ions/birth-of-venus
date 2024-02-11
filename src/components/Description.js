import React from 'react';
import './Description.scss';

const Description = () => {
  const descriptionData = [
    'Known as the “Birth of Venus”, the composition actually shows the goddess of love and beauty arriving on land, on the island of Cyprus, born of the sea spray and blown there by the winds, Zephyr and, perhaps, Aura. The goddess is standing on a giant scallop shell, as pure and as perfect as a pearl. She is met by a young woman, who is sometimes identified as one of the Graces or as the Hora of spring, and who holds out a cloak covered in flowers. Even the roses, blown in by the wind are a reminder of spring. The subject of the painting, which celebrates Venus as symbol of love and beauty, was perhaps suggested by the poet Agnolo Poliziano.',
    'It is highly probable that the work was commissioned by a member of the Medici family, although there is nothing written about the painting before 1550, when Giorgio Vasari describes it in the Medici’s Villa of Castello, owned by the cadet branch of the Medici family since the mid-15th century. This hypothesis would seem to be born out by the orange trees in the painting, which are considered an emblem of the Medici dynasty, on account of the assonance between the family name and the name of the orange tree, which at the time was ‘mala medica’.',
    'Unlike the “Allegory of Spring”, which is painted on wood, the “Birth of Venus” was painted on canvas, a support that was widely used throughout the 15th century for decorative works destined to noble houses.',
    'Botticelli takes his inspiration from classical statues for Venus’ modest pose, as she covers her nakedness with long, blond hair, which has reflections of light from the fact that it has been gilded; even the Winds, the pair flying in one another’s embrace, is based on an ancient work, a gem from the Hellenistic period, owned by Lorenzo the Magnificent.',
  ];

  return (
    <div className="Description">
      <h2>Description</h2>
      <div className="description-content">
        {descriptionData.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <p className="author">Text by: Daniela Parenti</p>
    </div>
  );
};

export default Description;
