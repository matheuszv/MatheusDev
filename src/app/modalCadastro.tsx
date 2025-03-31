import { CloseOutlined } from '@ant-design/icons'
import * as Dialog from '@radix-ui/react-dialog'

export function ModalCadastro(){

    return(
        <Dialog.Portal>
            <Dialog.Overlay className='fixed w-screen h-screen inset-0 
            bg-[#000000af]'/>

            <Dialog.Content className='
              rounded-lg
              p-10
            bg-[#0f0f14]
              fixed
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              min-w-[480px]
              flex
              flex-col
              gap-8'
            >
                <div className="flex justify-between text-white">
                    <Dialog.Title> 
                        <strong className="text-2xl text-white">Let's connect!</strong> 
                    </Dialog.Title>

                    <Dialog.Close>
                        <CloseOutlined className='text-white' />
                    </Dialog.Close>
                </div>
                <div className='flex flex-col gap-5 text-white'>
                    <span>Connect with me, on LinkedIn!</span>
                    <a href="https://www.linkedin.com/in/matheuszv/" className='underline text-green-600' target='_blank'>Matheus LinkedIn</a>
                    <span>Connect with me, on Github!</span>
                    <a href="https://www.linkedin.com/in/matheuszv/" className='underline text-green-600' target='_blank'>Matheus LinkedIn</a>
                </div>
                  
            </Dialog.Content>
        </Dialog.Portal>
    )
    
}
