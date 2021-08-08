"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.ProcessAddPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayClothingList = void 0;
const clothingModel_1 = __importDefault(require("../Models/clothingModel"));
const DisplayClothingList = (req, res, next) => {
    clothingModel_1.default.find((err, clothingList) => {
        if (err) {
            console.error(err);
        }
        res.render("index", { clothingList: clothingList, page: "clothing-list", title: "clothing-list" });
    });
};
exports.DisplayClothingList = DisplayClothingList;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'update', clothingItemToEdit: '' });
}
exports.DisplayAddPage = DisplayAddPage;
const DisplayEditPage = (req, res, next) => {
    const id = req.params.id;
    clothingModel_1.default.findById(id, {}, {}, (err, clothingItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: "Edit", clothingItemToEdit: clothingItemToEdit, page: "update" });
    });
};
exports.DisplayEditPage = DisplayEditPage;
function ProcessAddPage(req, res, next) {
    let newClothingItem = new clothingModel_1.default({
        "name": req.body.name,
        "price": req.body.price
    });
    clothingModel_1.default.create(newClothingItem, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/clothing-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedClothingItem = new clothingModel_1.default({
        "_id": id,
        "name": req.body.name,
        "price": req.body.price
    });
    clothingModel_1.default.updateOne({ _id: id }, updatedClothingItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/clothing-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    clothingModel_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/clothing-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=clothingController.js.map