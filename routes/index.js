const express = require("express");
const router = express.Router();
const apartments_json = require('../public/jsons/apartments.json');
const apartments_json_eng = require('../public/jsons/apartmentseng.json')
const gallery_json_images = require('../public/jsons/gallery_images.json');

router.get("/", (req, res) => {
  const lang = req.cookies.mara_lang;
  if (lang === 'serbian') {
    res.render("home", {
      serbian: true
    });
    return;
  }

  res.render("homeeng", {});
});


router.get("/contact", (req, res) => {
  const lang = req.cookies.mara_lang;
  if (lang === 'serbian') {
    res.render("contact", {
      title: "Kontakt",
      serbian: true,
      bannerImg: "/amelia/slika52-min-min.jpg"
    });
    return;
  }
  res.render("contacteng", {
    title: "Contact",
    bannerImg: "/amelia/slika52-min-min.jpg"
  });
});

router.get("/about", (req, res) => {
  const lang = req.cookies.mara_lang;
  if (lang === 'serbian') {
    res.render("about", {
      title: "O nama",
      serbian: true,
      bannerImg: "/amelia/slika32-min.jpg"
    });
    return;
  }
  res.render("abouteng", {
    title: "About us",
    bannerImg: "/amelia/slika32-min.jpg"
  });
});
router.get("/gallery", (req, res) => {
  res.render("galleryPage", {
    title: "Gallery",
    images: gallery_json_images
  });
});
router.get("/about-place", (req, res) => {
  const lang = req.cookies.mara_lang;
  if (lang === 'serbian') {
    res.render("aboutplace", {
      title: "O mestu",
      serbian: true,
      bannerImg: "/placeImg/Maškovića Han.png"
    });
    return;
  }
  res.render("aboutplaceseng", {
    title: "About Place",
    bannerImg: "/placeImg/Maškovića Han.png"
  });
});

router.get("/apartments/:name", (req, res) => {
  const param = req.params.name;
  let apartment;
  let serbian;
  const lang = req.cookies.mara_lang;
  if (lang === 'serbian') {
    serbian = true;
    apartment = apartments_json[param];
  } else {
    serbian = false;
    apartment = apartments_json_eng[param];
  }

  res.render("apartment", {
    apartment_name: apartment.title,
    apartment_images: apartment.images,
    apartment_content: apartment.content,
    apartment_icons: apartment.icons,
    apartment_capasity: apartment.capasity,
    apartment_cards: apartment.cards,
    apartment_mapa: apartment.mapa,
    serbian: serbian
  });
})

router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
