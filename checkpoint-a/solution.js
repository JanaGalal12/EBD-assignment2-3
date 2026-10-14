// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders(){
    return await findAllOrders();

}

export function myOrders(orders){
    return orders.filter((order) => order.city === "Alexandria" && order.status ==="cancelled");
}
export function summarize(order){
    return order.reduce((best, order) => (order.price > best ? order.price : best) , 0);
}
export async function describeOrder(id){
    try { 
        const order = await findOrderById(id);
        return `${order.quantity} x ${order.item} for ${order.student}`;
    }   catch (error){
        return `Could not find order ${id}`
    } 
}
export function toJsonLines(order){
  const picked = order.map((order) => ({item: order.item, price: order.price}));
  return JSON.stringify(picked);
}
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
