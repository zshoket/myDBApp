const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    unternehmen: {
      type: String,
      required: true
    },
    kurzbeschreibung: {
        type: Array,
        items: [
          {
            type: String
          },
          {
            type: String
          },
          {
            type: String
          }
      ],
      required: true
    },
    reifegrad: {
        type: Array,
        items: [
          {
            type: String
          },
          {
            type: String
          },
          {
            type: String
          }
      ],
      //required: true
    },
    nutzenversprechen: {
        type: Array,
        items: [
          {
            type: String
          },
          {
            type: String
          },
          {
            type: String
          }
      ],
      //required: true
    },
    herausforderungen: {
        type: Array,
        items: [
          {
            type: String
          },
          {
            type: String
          },
          {
            type: String
          }
        ],
        //required: true
    },
    auswirkungenMensch: {
        type: Array,
        items: [
          {
            type: String
          },
          {
            type: String
          }
        ],
        //required: true
    },
    auswirkungenOrganisation: {
        type: Array,
        items: [
          {
            type: String
          },
          {
            type: String
          },
          {
            type: String
          }
        ],
        //required: true
    },
    auswirkungenTechnik: {
      type: Array,
      items: [
        {
          type: String
        }
      ]
    },
});

module.exports = mongoose.model('Posts', PostSchema);

