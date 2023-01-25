import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import { Input } from '../components/input';
import { Label } from '../components/label';
import {useForm} from "react-hook-form";
import { values } from 'lodash';
// import { IconEyeClose, IconEyeOpen } from '../components/icon';
import { Field } from '../components/field';
import { Button } from '../components/button';
// import { LoadingSpinner } from 'components/loading';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, db } from 'firebase-app/firebase-config';
import { NavLink, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import AuthenticationPage from './AuthenticationPage';
import InputPasswordToggle from 'components/input/InputPasswordToggle';


const schema = yup.object({
    fullname:yup.string().required("Please enter your fullname"),
    email: yup.string().email("Please enter your email").required("Please enter your email"),
    password:yup.string().min(8, "Your password must be at least 8 characters or greater").required("Please enter your password"),
})
const SignUpFile = () => {
    const navigate = useNavigate();
    const {control, handleSubmit,
         formState:{errors,isValid,isSubmitting},
         watch, reset,
    } = useForm({
        mode: "onChange",
        resolver:yupResolver(schema),
    });
    const handSignUp = async (values) => {
       
        if(!isValid) return;
        console.log(values);
        const user = await createUserWithEmailAndPassword(auth, values.email, values.password);
        await updateProfile(auth.currentUser,{
            displayName: values.fullname,
        })
        const colRef = collection(db,'users');
        await addDoc(colRef,{
            fullname:values.fullname,
            email: values.email,
            password:values.password,
        })
        toast.success('Create user successfully');
        navigate("/");
        // return new Promise((resolve) => {
        //     setTimeout(()=>{
        //         resolve();
        //     }, 5000);
        // })
    }

    useEffect(()=> {
        document.title="Regiter page"
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            toast.error(arrErrors[0]?.message,{
                pauseOnHover:false,
                delay:0,
                
            });
        }
    },[errors]);
    return (
        <AuthenticationPage>
            
                <form className='form' onSubmit={handleSubmit(handSignUp)} autoComplete="off">
                    <Field>
                        <Label htmlFor='fullname'> Full Name</Label>
                        <Input control={control} type="text"
                        name='fullname' placeholder='Enter your fullname'>
                            
                        </Input>
                    </Field>
                    <Field>
                        <Label htmlFor='email'> Email address</Label>
                        <Input  control={control} type="email"
                        name='email' placeholder='Enter your Email address'>
                            
                        </Input>
                    </Field>
                    <Field>
                        <Label htmlFor='password'> Password</Label>
                        <InputPasswordToggle control={control}></InputPasswordToggle>
                    </Field>
                    <div className='have-account'>You already have an account ? <NavLink to={'/sign-in'}>Login</NavLink></div>
                    <Button type="submit" className="w-full max-w-[300px] mx-auto"
                    isLoading={isSubmitting}
                    disabled = {isSubmitting}
                    >
                        SignUp
                    </Button>
                </form>

            
        </AuthenticationPage>
    );
};

export default SignUpFile;