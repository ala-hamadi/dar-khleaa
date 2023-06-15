import React, { useState } from "react";
import Footer from "../components/Footer";
import HeaderAuth from "../components/HeaderAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../utils";
import axios from "axios";
import { Link } from "react-router-dom";

export default function About() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const sendContact = (e) => {
    e.preventDefault();
    const contact = {
      emailUser: email,
      description,
    };
    axios
      .post(`/contactUser`, contact)
      .then((res) => {
        notify("message was sent successfully!", toast, "success");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='body-wrapper'>
      <ToastContainer />
      <HeaderAuth />
      <div className='ltn__utilize-overlay' />
      {/* BREADCRUMB AREA START */}
      <div
        className='ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image '
        data-bs-bg='img/bg/14.jpg'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='ltn__breadcrumb-inner'>
                <h1 className='page-title'>About Us</h1>
                <div className='ltn__breadcrumb-list'>
                  <ul>
                    <li>
                      <Link to={"/"}>
                        <span className='ltn__secondary-color'>
                          <i className='fas fa-home' />
                        </span>{" "}
                        Home
                      </Link>
                    </li>
                    <li>About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      Bienvenue sur notre site web immobilier dédié à la location ! Chez nous, nous comprenons à quel point il est important de trouver le lieu de vie idéal qui correspond à vos besoins et à votre style de vie. C'est pourquoi nous nous efforçons de vous offrir une expérience de recherche de location agréable et efficace.
      Notre équipe d'experts passionnés de l'immobilier est là pour vous accompagner à chaque étape de votre parcours de location. Que vous soyez à la recherche d'un appartement moderne en centre-ville, d'une maison spacieuse en banlieue ou d'un studio confortable, nous avons une vaste sélection de biens immobiliers disponibles qui répondront à vos critères.
      Nous sommes fiers de travailler avec des propriétaires de confiance et des agents immobiliers professionnels pour vous proposer les meilleures options de location sur le marché. Chaque annonce sur notre site est soigneusement vérifiée pour garantir que les informations et les photos reflètent fidèlement la propriété.
      Notre interface conviviale et intuitive vous permet de parcourir facilement les différentes annonces, d'appliquer des filtres de recherche personnalisés et de visualiser des galeries de photos détaillées pour chaque bien. Nous mettons à votre disposition des informations claires et précises sur les caractéristiques de chaque propriété, les commodités à proximité, les conditions de location et bien plus encore.
      Au-delà de la recherche de location, nous nous engageons à fournir un service client de qualité supérieure. Notre équipe est disponible pour répondre à vos questions, vous guider tout au long du processus de location et vous fournir des conseils pertinents sur le marché immobilier local.
      Nous croyons en la transparence et l'intégrité dans notre travail. Nous nous efforçons de vous fournir toutes les informations nécessaires pour prendre des décisions éclairées et trouver la location qui vous convient le mieux. Votre satisfaction est notre priorité absolue, et nous nous engageons à vous offrir une expérience de location fluide et sans tracas.
      Que vous soyez un étudiant à la recherche d'un logement abordable, un professionnel à la recherche d'un appartement moderne ou une famille à la recherche d'une maison spacieuse, nous avons les ressources et l'expertise nécessaires pour vous aider à trouver la location parfaite.
      Nous vous invitons à explorer notre site web, à parcourir nos annonces et à nous contacter si vous avez des questions ou besoin d'assistance. Nous sommes impatients de vous aider à trouver votre prochaine location et de vous accompagner dans votre recherche immobilière.
      Bienvenue dans l'univers de la location avec Dar Khleaa !
      {/* BREADCRUMB AREA END */}
      <Footer />
      
    </div>
  );
}