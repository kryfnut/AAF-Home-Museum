import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';

export default function AboutColophon() {
  const history = useHistory();

  return (
    <div className="about-colophon-container">
      <div className="text-container">
        <p className="bold">ABOUT US</p>
        <p>LagosPhoto Festival</p>
        <p>Founding Director: Azu Nwagbogu</p>
        <br />
        <p>LagosPhoto20</p>
        <p>Rapid Response Restitution / Home Museum</p>
        <p>Concept and Co-Direction: Dr. Clémentine Deliss & Azu Nwagbogu</p>
        <p>Guest Curators: Dr. Oluwatoyin Sogbesan & Asya Yaghmurian</p>
        <p>Curatorial Assistants: Philip Fagbeyiro & Feranmi Olukosi</p>
        <p>General Manager: Olayinka Sangotoye</p>
        <p>Creative Manager: Princess Ayoola</p>
        <p>Media/Photography/Research: Ugochukwu Emeboriodo</p>
        <p>Intern Birds of Knowledge: Carmen de Middel Puch</p>
        <br />
        <p>Home Museum Online Concept & Design</p>
        <p>Birds of Knowledge:</p>
        <p>Megan Dieudonné</p>
        <p>Philip Fagbeyiro</p>
        <p>Jakob Karpus</p>
        <p>Ruxin Liu</p>
        <p>Julia Nordholz</p>
        <p>Joana Atemengue Owona</p>
        <p>Jakob Sitter</p>
        <p>Asma Ben Slama</p>
        <p>Ilo Toivio</p>
        <p>Alper Turan</p>
        <p>Yan Yan</p>
        <br />
        <p>Programming</p>
        <p>Kuku Wuzhao Li, Github Contact: snowjujube</p>
        <br />
        <p className="bold">SUPPORT</p>
        <p>Open Society Initiative for West Africa (OSIWA)</p>
        <p>Ford Foundation</p>
        <p>Goethe-Institut, Lagos</p>
        <p>Alliance Française, Mike Adenuga Centre, Lagos</p>
        <p>Arts of the Working Class</p>
        <p>Picter</p>
        <p>Nigerian Commission of Museums and Monuments (NCMM)</p>
        <p>
          LagosPhoto20 and Home Museum have been developed in collaboration with the Nigerian Commission of
          Museums and Monuments (NCMM). We would like to acknowledge the support and participation of the
          following museums:
        </p>
        <p>
          National Museum Lagos, National Museum of Unity Abeokuta, National Museum Benin, National Museum Old
          Residency Calabar, National Museum Esie, National Museum of Unity Ibadan, National Museum Ile-Ife,
          National Museum Jigawa, National Museum Jos, National Museum Kaduna, National Museum Owo, and Museum
          of Traditional Nigerian Architecture (MOTNA).
        </p>
        <p>Home Museum would like to thank</p>
        <p>
          Alhaji Aliyu Abdulfattah, Prince Bob Aiwerioba, Beate Anspach, Hawa Bâ, Maria Pia Bernardoni, Rashida
          Bumbra, Veronika Chatelain, Innocent Chukwuma, Nancy Dantas, Edith Ekunke, Jay Levenson, Gabriele
          Möschel, Konstantin Mrohs, Elizaveta Ostapenko, Barbara Plankensteiner, Prince Yemisi Shyllon, SSP
          History and Theory, University of Fine Arts Hamburg (HfBK), Darren Walker, Samuel Witt, Yukiko
          Yamagata, and the co-creators of Home Museum.
        </p>
        <br />
        <p className="bold">CONTACT</p>
        <p>For further information on LagosPhoto and Home Museum please write to:</p>
        <p>homemuseum@lagosphotofestival.com</p>
        <p>info@africanartists.org</p>
        <br />
        <p className="bold">SOCIAL MEDIA</p>
        <a href="https://www.instagram.com/lagosphotofestival/?hl=en">https://www.instagram.com/lagosphotofestival/?hl=en</a>
        <br />
        <a href="https://www.facebook.com/LagosPhotoFestival/">https://www.facebook.com/LagosPhotoFestival/</a>
        <br />
        <a href="https://twitter.com/lagosphotofest?lang=en">https://twitter.com/lagosphotofest?lang=en</a>
        <br />
        <div className="icons-group" />
      </div>
      <div className="back-container">
        <div onClick={() => history.goBack()} className="go-prev" />
      </div>
    </div>
  );
}
