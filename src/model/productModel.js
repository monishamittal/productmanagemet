//.................................... Import Models for using in this module ....................//
const mongoose = require("mongoose");

//................................. Create Schema .........................//
const productSchema = new mongoose.Schema(
    {
        
  title: {
    type:String,
    required:true,
    unique:true
},
  description: {
    type:String,
    required:true
},
  price: {
    type:Number, 
    required:true,
    // valid number/decimal
},
  currencyId: {
    type:String,
    required:true,
    //  INR
    },
  currencyFormat: {
    type:String,
    required:true,
    //  Rupee symbol
    },
  isFreeShipping: {
    type:Boolean,
    default: false
},
  productImage: {
    type:String,
    required:true
},  // s3 link
  style: {
    type:String,
  },
  availableSizes: {
    type:String,
    //  at least one size,
      enum:["S", "XS","M","X", "L","XXL", "XL"]
    },
  installments: {
    type:Number
},
  deletedAt: {
    type:Date,
    //  when the document is deleted
    }, 
  isDeleted: {
    type:Boolean,
     default: false
},
    },
    { timestamps: true }
);

//........................................Export Schema..................................//
module.exports = mongoose.model("Product", productSchema);                         //provides an interface to the database like CRUD operation
