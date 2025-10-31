import { Metadata } from "next";
import NotFoundProdcut from "../not-found";
interface propId {
      params: Promise<{ProductId: string}>;
    SearchParams: Promise<{}>;
}
export const generateMetadata = async ({params}: propId):Metadata=> {
      const { ProductId} = await params
   return {
    title :  `product ${ProductId}`
   }
}



async function ProductId  ({params}: propId)  {
    const { ProductId} = await params
    if (parseInt(ProductId) > 20) {
        return NotFoundProdcut()
    }
    return ( 
        <div className="w-full h-[450px] flex  items-center justify-center">
            <div className="w-[250px] shadow-md border rounded h-[150px]  flex  items-center justify-center">
                  <h1 className="text-3xl font-normal"> Product : <span className="text-red-400"> {ProductId}</span></h1>
        </div>
        </div>
     );
}
 
export default ProductId;