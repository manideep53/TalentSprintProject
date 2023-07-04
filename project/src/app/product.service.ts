import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _httpclient: HttpClient) {}
  API = 'http://localhost:8085';

  // public registerCarWashProducts(productsData: any) {
  //   return this._httpclient.post(
  //     this.API + '/registerCarWashProducts',
  //     productsData
  //   );
  // }

  public getProduct() {
    return this._httpclient.get(this.API + '/getAllCarWashProducts');
  }

  // public deleteCarWashProducts(id: any) {
  //   return this._httpclient.delete(
  //     this.API + '/deleteCarWashProductsById?id=' + id
  //   );
  // }

  // getALLCarWashingProducts() {
  //   return [
  //     {
  //       productId: '1',
  //       productName: 'SILVER WASH',
  //       productPrice: '550.00',
  //       productDescription:
  //         'Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board polishing + Car perfume spray',
  //       productQuantity: '1',
  //       productImagePath: '/assets/Images/img1.png',
  //     },
  //     {
  //       productId: '2',
  //       productName: 'GOLD WASH',
  //       productPrice: '700.00',
  //       productDescription:
  //         'Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Body Shampooing and washing including door frames + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Side doors cleaning + Dash board cleaning and polishing + tires and alloy wheels treatment + Car perfume spray',
  //       productQuantity: '1',
  //       productImagePath: '/assets/Images/img2.png',
  //     },
  //     {
  //       productId: '3',
  //       productName: 'PLATINUM WASH',
  //       productPrice: '2000.00',
  //       productDescription:
  //         'Complete dry cleaning of a interior including seats (carpet/leather), roof, mats and boot + Complete vacuuming of cars incl. seats and boot + Washing and cleaning of foot mats + Pre washing of car + Foam cleaning of exterior + Tyre arches cleaning + Underbody wash + Engine hot water wash and dressing + Washing and cleaning of door frames + Side doors cleaning and polishing + Dash board cleaning and polishing + Tyre and alloy polishing + Scratch proof windshield spray + Car perfume spray.',
  //       productQuantity: '1',
  //       productImagePath: '/assets/Images/img3.png',
  //     },
  //     {
  //       productId: '4',
  //       productName: 'INTESIVE INTERNAL CLEANING',
  //       productPrice: '1700.00',
  //       productDescription:
  //         'Complete dry cleaning of a interior including seats (carpet/leather), roof, mats and boot, Dressings to all vinyl, plastic, rubber giving your car spotless, shiny, glossy interior.',
  //       productQuantity: '1',
  //       productImagePath: '/assets/Images/img4.png',
  //     },
  //     {
  //       productId: '5',
  //       productName: 'WAX RUBBING AND BUFFING',
  //       productPrice: '2000.00',
  //       productDescription:
  //         'Over the time cars paint erodes due to the effects of sunlight, UV radiation, acid rain, salt, dirt, bird droppings and Air pollution. We give NEW LOOK TO PAINTED SURFACES by repairing the paint scratches, swirls marks, dullness, etc by using special rubbing compounds and imported polishes approved by the car manufacturers.',
  //       productQuantity: '1',
  //       productImagePath: '/assets/Images/img5.png',
  //     },
  //     {
  //       productId: '6',
  //       productName: 'TEFLON COATING',
  //       productPrice: '3200.00',
  //       productDescription:
  //         'Our PTFE based Polymer paint sealant creates slippery, slick barrier that protects the paint finishes, reduces fading & oxidation of paint. It repels dirt & grime, accelerates water run-off to reduce spotting, smoothness weathered surface and removes scratches giving depth to the paint.',
  //       productQuantity: '1',
  //       productImagePath: '/assets/Images/img6.png',
  //     },
  //   ];
  // }

  // getALLCarDetailingProducts() {
  //   return [
  //     {
  //       productId: '1',
  //       productName: 'ENGINE DEGRESING & COATING',
  //       productPrice: '700.00',
  //       productDescription:
  //         'This treatment is designed to provide a high gloss and slippery coating on to the engine parts, hoses etc. The primary advantage of this treatment is to prevent the hoses and electrical wiring from getting bitten by rats so that a vehicle parked for a long duration is not a victim of such untoward incidents. Leaves a high, glossy, transparent surface finish. Excellent resistance to: Petrol/Diesel+ Engine Oil + High Pressure water + Road grime + Avoids corrosion + Can be washed easily + Does not blister, crack, peel or yellow',
  //       productImagePath: '/assets/Images/d1.png',
  //     },
  //     {
  //       productId: '2',
  //       productName: 'A.C. TREATMENT',
  //       productPrice: '800.00',
  //       productDescription:
  //         'This protection is designed to disinfect the Air conditioner ducts and to improve air quality Cleans the Air conditioner coils and ducts, Disinfects the ducts and helps to stop buildup of mould,Removes all bad and foul odors from the ducts,Improves in-car air quality for the well being of driver and passengers.',
  //       productImagePath: '/assets/Images/d2.png',
  //     },
  //     {
  //       productId: '3',
  //       productName: 'ALLOY DESCALING & TYRE TREATMENT',
  //       productPrice: '700.00',
  //       productDescription:
  //         'This treatment is designed for cleaning and protection of the alloy wheels. One of the biggest challenges being faced is in protecting alloy wheels from brake dust and grime. This, in-turn leaves spider web cracks on the alloy wheels and cannot be repaired. The beauty and sheen of the alloy wheels is lost in the process. This application is aimed at restoring the lost sheen of the alloy wheels and also ensuring long-term protection.Grime,Only regular washing needed after Protection,No need for expensive alloy wheel cleaners,No cracking or scaling off of the Alloy coating.',
  //       productImagePath: '/assets/Images/d3.png',
  //     },
  //     {
  //       productId: '4',
  //       productName: 'HEADLIGHT RESTORATION ',
  //       productPrice: '500.00',
  //       productDescription:
  //         'This treatment radically improves the visibility of headlights by giving a new life to the head light cover. It clears all hard water and oxidation from the glass, thereby letting the headlights shine bright.Removes all dirt, dust, hard water marks from the glass, Removes the oxidation formed which clears the passage of light, Makes night driving safer.',
  //       productImagePath: '/assets/Images/d4.png',
  //     },
  //     {
  //       productId: '5',
  //       productName: 'UPHOLSTERY PROTECTION ',
  //       productPrice: '1200.00',
  //       productDescription:
  //         'In this treatment, a thorough cleaning of the fabric is carried out by a proprietary chemical. This removes the dirt, dust & grime including very tough stains like chocolates, coffee/ tea etc. The aerosol used to clean the surface dries very quickly, hence leaving no bad odors and making the interiors fresh. Cleans & Protects: Carpets + Interior Vinyl + Fabric + Plastics + Rubber surfaces + Removes all dirt and restores leather seats and side padding + Produces a true color of fabric giving a natural and rich appearance..',
  //       productImagePath: '/assets/Images/d5.png',
  //     },
  //     {
  //       productId: '6',
  //       productName: 'WINDSHIELD TREATMENT',
  //       productPrice: '1200.00',
  //       productDescription:
  //         'This is for cleansing and protection of windshield of cars. With this treatment, hard water marks and oxidation are removed and a fine protective layer is formed to provide clear vision to drive during night as well as during rainy season. Enhances the safety & drive-ability. Dramatically improves all weather visibility, safety and driving comfort..',
  //       productImagePath: '/assets/Images/d6.png',
  //     },
  //     {
  //       productId: '7',
  //       productName: 'LEATHER CONDITIONING',
  //       productPrice: '800.00',
  //       productDescription:
  //         'In this treatment, an intensive cleansing of the leather is allotted by a proprietary chemical. This removes the dirt, mud; grime together with terribly powerful stains like chocolates, coffee/ tea etc. The aerosol accustomed clean the surface dries quickly, hence no unhealthy odors and creating the interiors recent.Cleans & Protects: Carpets + Interior Vinyl + Leather + Plastics + Rubber surfaces + Removes all dirt and restores leather seats and facet cushioning + Produces a real color of leather giving a natural and made look..',
  //       productImagePath: '/assets/Images/d7.png',
  //     },
  //   ];
  // }
}
