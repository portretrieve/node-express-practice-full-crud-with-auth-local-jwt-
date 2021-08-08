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

