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


export const DisplayEditPage = (req:Request, res:Response, next:NextFunction) =>{

    const id = req.params.id;

    ClothingModel.findById(id, {}, {}, (err, clothingItemToEdit)=>{

        if (err) {
            console.error(err);
            res.end(err);
        }

    })


}