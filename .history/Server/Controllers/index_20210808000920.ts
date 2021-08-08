import express, {Request, Response, NextFunction} from "express";

export function DisplayHomePage(req : Request , res : Response, next : NextFunction){
    res.render("index", { title: "Home", page:"home" });
}

export function DisplayAboutPage(req : Request , res : Response, next : NextFunction){
    res.render("index", { title: "Home", page:"home" });
}

export function DisplayProjectsPage(req : Request , res : Response, next : NextFunction){
    res.render("index", { title: "Home", page:"home" });
}

export function DisplayServicesPage(req : Request , res : Response, next : NextFunction){
    res.render("index", { title: "Home", page:"home" });
}

export function DisplayContactPage(req : Request , res : Response, next : NextFunction){
    res.render("index", { title: "Home", page:"home" });
}