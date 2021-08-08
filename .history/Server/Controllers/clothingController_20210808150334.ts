import express, {Request, Response, NextFunction} from "express";
import ClothingModel from "../Models/clothingModel";

export const DisplayClothingList = (req:Request, res:Response, next:NextFunction)=>{
    ClothingModel.find((err, clothingList)=>{
        if (err) {
            console.error(err)
        }
        res.render("index", {clothingList : clothingList, page : "clothing-list", title: "clothing-list" } )
    })
}

// Display Create page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', clothingItemToEdit: '' });
}

export const DisplayEditPage = (req:Request, res:Response, next:NextFunction) =>{
    const id = req.params.id;
    ClothingModel.findById(id, {}, {}, (err, clothingItemToEdit)=>{
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: "Edit Clothing Item", clothingItemToEdit : clothingItemToEdit, page:"update" })
    })
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Clothing Item
    let updatedClothingItem = new ClothingModel
    ({
      "_id": id,
      "name": req.body.name,
      "brand": req.body.brand,
      "category": req.body.category,
      "colour": req.body.colour,
      "size": req.body.size,
      "price": req.body.price
    });
  
    // find the clothing item via db.clothing.update({"_id":id}) and then update
    Clothing.updateOne({_id: id}, updatedClothingItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/clothing-list');
    });
}