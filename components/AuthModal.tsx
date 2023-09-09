"use client"


import {FC, useEffect} from 'react';
import {Modal} from "@/components/Modal";
import {useSessionContext, useSupabaseClient} from "@supabase/auth-helpers-react";
import {useRouter} from "next/navigation";
import {Auth} from "@supabase/auth-ui-react";
import {darkThemes, ThemeSupa} from "@supabase/auth-ui-shared";
import {useAuthModal} from "@/hooks/useAuthModal";

interface IAuthModalProps {
}

export const AuthModal: FC<IAuthModalProps> = () => {
  const supabaseClient = useSupabaseClient()
  const router = useRouter()
  const {session} = useSessionContext()
  const {onClose, isOpen} = useAuthModal()

  useEffect(() => {
    if(session) {
      router.refresh()
      onClose()
    }
  }, [session, router, onClose]);

  const onChange = (open: boolean) => {
    if(!isOpen) {
      onClose()
    }
  }

  return (
    <Modal title={'Welcome back'}
           description={'Login to your account'}
           isOpen={isOpen}
           onChange={onChange}
           onClick={onClose}
    >
      <Auth theme={'dark'}
            magicLink
            providers={['github']}
            supabaseClient={supabaseClient}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#404040",
                    brandAccent: "#22c55e"
                  }
                }
              }
            }}
      />
    </Modal>
  );
};