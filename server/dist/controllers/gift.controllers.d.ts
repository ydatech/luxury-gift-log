import type { Request, Response } from "express";
export declare const createGift: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getGifts: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getGiftById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateGift: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteGift: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=gift.controllers.d.ts.map