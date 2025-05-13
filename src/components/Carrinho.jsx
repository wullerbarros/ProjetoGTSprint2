import React from 'react';


const Carrinho = () => {
    return (

        <div className='h-full'>
            <table className='w-full]'>
                <thead>
                    <tr className='flex  text-[#474747'>
                        <th className='flex-3 text-left'>MEU CARRINHO</th>
                        <th className='flex-1 font-med'>QUANTIDADE</th>
                        <th className='flex-1 font-med'>UNITÁRIO</th>
                        <th className='flex-1 font-med'>TOTAL</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <div className='bg-[#e2e3ff] h-32 flex items-center justify-center rounded-sm'>
                                <img src="{tenis}" alt="tenis nike" />
                            </div>
                        </td>
                        <td className='bg-amber-50'></td>
                        <td className='bg-amber-300'></td>
                        <td className='bg-amber-700'></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Carrinho
