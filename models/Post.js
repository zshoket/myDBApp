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
    dimension: {
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
    einordnungKette: {
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
    veränderungenMensch: {
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
    veränderungenOrganisation: {
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
    veränderungenTechnologie: {
      type: Array,
      items: [
        {
          type: String
        }
      ]
    },
});

module.exports = mongoose.model('Posts', PostSchema);

