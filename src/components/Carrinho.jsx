import React, { useState } from 'react';
import Tenis from '../assets/Tenis.png'

const produtos = [
    {
        produto: 'k-swiss V8-masc',
        categoria: 'Tenis',
        preco: 200,
        img: Tenis
    },{
        produto: 'k-swiss V8-masc',
        categoria: 'Tenis',
        preco: 200,
        img:Tenis
    },{
        produto: 'k-swiss V8-masc',
        categoria: 'Tenis',
        preco: 200,
        img:Tenis
    },{
        produto: 'k-swiss V8-masc',
        categoria: 'Tenis',
        preco: 200,
        img:Tenis
    }
]



const Carrinho = () => {
    const  [count, setCount] = useState(0)

    function addToCart(){
        setCount((count) => count + 1)
    }
    return (

        <>
        <section className='bg-white p-8'>
            <table className='w-full font-inter'>
                <thead>
                    <tr className='flex  text-[#474747'>
                        <th className='flex-3 text-left'>MEU CARRINHO</th>
                        <th className='flex-1 font-medium'>QUANTIDADE</th>
                        <th className='flex-1 font-medium'>UNITÁRIO</th>
                        <th className='flex-1 font-medium'>TOTAL</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='flex border-t border-b border-[#ccc] py-5 mt-5'>
                        <td className='flex-3 flex gap-5'>
                            <div className='bg-[#e2e3ff] h-32  w-32 flex items-center justify-center rounded-sm'>
                                <img src={Tenis} alt="tenis nike" />
                            </div>
                            <div>
                                <h2 className='font-bold w-58 '>Tênis Nike Revolution 6 Next 
                                Nature Masculino</h2>
                                <p className='mt-[10px] mb[5px]'><span className='text-[#8f8f8f]'>Cor:</span> Vermelho / Preto</p>
                                <p><span className='text-[#8f8f8f]'>Tamanho:</span> 42</p>
                            </div>
                        </td>
                        <td className='flex-1 text-center flex items-center flex-col justify-center gap-4 '>
                            <div className=''>
                            <button disabled={count <= 0} onClick={() => setCount((count) => count - 1 )} className={`${count <= 0? "opacity-50 cursor-not-allowed":"cursor-pointer"} border w-8  border-[#ccc] h-8 rounded-sm`} >-</button>
                            <span className='mx-2'>{count}</span>
                            <button onClick={() => setCount((count) => count + 1 )} className='border w-8 cursor-pointer border-[#ccc] h-8 rounded-sm' >+</button>
                            </div>
                            <button onClick={() => addToCart()} className='text-[#474747] underline cursor-pointer'>Remover item</button>

                        </td>
                        <td className='flex-1 bg-amber-300'></td>
                        <td className='flex-1 bg-amber-700'></td>
                    </tr>
                </tbody>
            </table>
        </section>
      

        <section className='ml-8'>
          <h1 className='font-bold text- 2xl mb-5'>Produtos Relacionnados</h1>
          <ul className='flex gap-20'>
            {produtos.map((item) => (
                <li className='border border-[#ccc] p-2'>
                     <div className='bg-[#e2e3ff] h-32  w-32 flex items-center justify-center rounded-sm'>
                                <img src={item.img} alt={item.produto} />
                            </div>
 
                        <div>
                            <h2>{item.categoria}</h2>
                            <h2>{item.produto}</h2>
                            <p>{item.preco}</p>
                            <button className='bg-green-700 w-[100%]  rounded-md'>Add</button>
                        </div>

                </li>

            ))}
          </ul>
        </section>
        </>
    )

}
export default Carrinho
