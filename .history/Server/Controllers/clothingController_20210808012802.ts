import express, {Request, Response, NextFunction} from "express";

import ClothingModel from "../Models/clothingModel";


export const DisplayClothingList = (req:Request, res:Response, next:NextFunction)=>{

    ClothingModel.find((err, clothingList)=>{
       
        console.log(clothingList)
    })

}