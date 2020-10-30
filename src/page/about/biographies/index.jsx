import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';

export default function AboutBiographies() {
  const history = useHistory();

  return (
    <div className="about-biographies-container">
      <div className="text-container">
        <p className="bold">BIOGRAPHIES</p>
        <p>Dr. Clémentine Deliss is Associate Curator of KW Institute for Contemporary Art Berlin, Guest Professor of Theory and History at Hamburg University of Fine Arts, and Mentor of the Berlin Program for Artists. Between 2010–2015, she directed the Weltkulturen Museum in Frankfurt, instituting a new lab for post-ethnographic research. She was a Fellow of the Institute of Advanced Study, Berlin, and has taught artistic research and curatorial practice at numerous art academies in Europe. Her recent book “The Metabolic Museum” is published by Hatje Cantz in co-production with KW.</p>
        <br />
        <p>Azu Nwagbogu is the Founder and Director of African Artists’ Foundation (AAF), a non-profit organisation based in Lagos, Nigeria. From June 2018 to August 2019, Nwagbogu was Interim Director and Head Curator of Zeitz Museum of Contemporary Art in Cape Town, South Africa. In 2007, Nwagbogu established LagosPhoto Festival, an annual international arts festival of photography held in Lagos. He is the publisher of Art Base Africa, a virtual space to discover and learn about contemporary art from Africa and its diasporas. Nwagbogu is a curator with a special interest in future museology, and the development of new models of collaboration.</p>
        <br />
        <p>Dr. Oluwatoyin Sogbesan is a researcher, cultural historian and an architect. She is particular about cultural understanding, implications and interpretations of African artefacts, art and built environment and from an African perspective. She obtained a Masters Degree in Architecture from Obafemi Awolowo University, MA in Arts and Heritage Management from London Metropolitan University, and her PhD in Culture, policy and management from City University London. Over 20 years experience that spans the built environment, art and museum sector has made her passionate about interrogating African heritage towards putting together a collective history. As part of her previous works is documentation of Nigerian Museums for European Union National Institute.</p>
        <br />
        <p>Asya Yaghmurian holds a Masters degree in Journalism. She co-founded and curated Armenia’s first Design Pavilion. She has worked for the international media and assisted on various art projects including the Dilijan Arts Observatory 2016 (Armenia), and “Portable Homelands” for the exhibition “Hello World. Revising a Collection” at Hamburger Bahnhof – Museum für Gegenwart, Berlin, 2018. More recently she was the curatorial assistant for the 33rd edition of the Ljubljana Biennial of Graphic Arts. She currently lives and works in Berlin where she is the co-curator of the forthcoming Slavs & Tatars’ “Pickle Bar” at KW Institute of Contemporary Art. Asya is an editor of art publications and speaks fluent Russian, Armenian, German and English. </p>
        <br />
        <p>Birds of Knowledge is a research cooperative of artists and social designers whose immediate origins hail from Nigeria, Tunisia, Cameroon, China, Turkey, Finland, Norway, Sweden, New Zealand and Germany. Birds of Knowledge wishes to communicate diverse approaches to research that can help one to form alliances in digital space during the pandemic. By transgressing disciplinary boundaries, we want to represent the thematic imagination of the younger generation and promote mutual aid and solidarity. Through this process we seek to create a counter-model of communication between artists and co-creators that works as an alternative to traditional and competitive forms of art and museum practices. We Birds of Knowledge, Megan Dieudonné, Philip Fagbeyiro, Jakob Karpus, Ruxin Liu, Joana Atemengue Owona, Jakob Sitter, Asma Ben Slama, Ilo Toivio, Alper Turan and Yan Yan see the long term approach of Home Museum as especially relevant to future transcultural dialogues.</p>
        <br />
      </div>
      <div className="back-container">
        <div onClick={() => history.goBack()} className="go-prev" />
      </div>
    </div>
  );
}
