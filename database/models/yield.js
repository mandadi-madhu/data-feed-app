const mongoose = require('../connection');

const yieldSchema = new mongoose.Schema(
    {
        curveType: String,
        curveID: String,
        observationDate: String,
        Currency: String,
        interpType: String,
        extraptype: String,
        daycountConvention: String,
        CompoundingFrequency: String,
        Maturity1: Number,
        Maturity2: Number,
        Maturity3: Number,
        Maturity4: Number,
        Maturity5: Number,
        Maturity6: Number,
        Maturity7: Number,
        Maturity8: Number,
        Maturity9: Number,
        Maturity10: Number,
        Value1: Number,
        Value2: Number,
        Value3: Number,
        Value4: Number,
        Value5: Number,
        Value6: Number,
        Value7: Number,
        Value8: Number,
        Value9: Number,
        Value10: Number
    }
);

const Yield = mongoose.model('Yield', yieldSchema);
module.exports = Yield;
