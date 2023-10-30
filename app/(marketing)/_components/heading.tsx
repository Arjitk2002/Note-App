"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {useConvexAuth} from 'convex/react'
import {SignInButton} from '@clerk/clerk-react'
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {
        const {isAuthenticated,isLoading} = useConvexAuth();
return(
    <div className="max-w-3xl space-y-4">
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas , Docs, & Plans. Unified . Welcome to
            <span className="underline">NoteIt</span>
         </h3>
         {isLoading && (
            <div className="w-full flex items-center justify-center">
                <Spinner size="lg"/>
            </div>
         )}
         {isAuthenticated && !isLoading && (
            <Button asChild>
                <Link href='/documents'>
            Enter NoteIt
            <ArrowRight className="h-4 w-4 ml-2"/>
                </Link>
         </Button>
         )}
         {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
                <Button>
                    Get NoteIt Free
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>

            </SignInButton>
         )}
    </div>
)
}