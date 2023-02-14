import React from "react"
import { Colors } from "../../styles/global"
import styled from "@emotion/styled"
import { useAuth } from "../../hooks/useAuth"
import Button from "../../components/Button"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createToken, getTokens } from "../../supabase/rest"


export default function UserToken(){

    const { token } = useAuth()
    const queryClient = useQueryClient()

    const { data: tokens } = useQuery({
        queryKey: ['user_tokens'],
        queryFn: () => getTokens(token),
        enabled: !!token
    })
    
    const handleCreateToken = useMutation({
        mutationFn: () => createToken(token),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['user_tokens'] })
    })


    return <>
        <InfoBody />
        {
            tokens?.length ?
            <TokensBoxStyle>
                {
                    tokens?.map( token => <TokenStyle key={token?.token}>
                        {token?.token }
                    </TokenStyle>)
                }
            </TokensBoxStyle>
            :
            <h2>
                <i> You currently do not have any API keys. </i>
            </h2>
        }
        <div>
            <Button outlined light onClick={() => handleCreateToken.mutate()}>
                Create new secret key
            </Button>
        </div>
    </>
}

const InfoBody = () => <>
    <HeadlineStyle>
        API keys
    </HeadlineStyle>
    <ContentStyle>
        Your secret API keys are listed below. <br/> 
        Please note that we do not display your secret API keys again after you generate them.
        <br/> <br/>
        Do not share your API key with others, or expose it in the browser or other client-side code. 
        <br/> In order to protect the security of your account, 
        Pollinations may also automatically rotate any API key that we've found has leaked publicly.
        
    </ContentStyle>
</>

const TokensBoxStyle = styled.ul`
width: 100%;
box-sizing: border-box;

display: flex;
justify-items: center;
flex-direction: column;
gap: 0.2em;
`

const TokenStyle = styled.p`
background-color: rgba(0,0,0,0.5);
padding: 10px;
    
border-radius: 4px;
white-space: -moz-pre-wrap; /* Mozilla */
white-space: -hp-pre-wrap; /* HP printers */
white-space: -o-pre-wrap; /* Opera 7 */
white-space: -pre-wrap; /* Opera 4-6 */
white-space: pre-wrap; /* CSS 2.1 */
white-space: pre-line; /* CSS 3 (and 2.1 as well, actually) */
word-wrap: break-word; /* IE */
word-break: break-all;
`
const ContentStyle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin: 0;
    /* gray 1 */
    color: ${Colors.offwhite};
`
const HeadlineStyle = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 32px !important;
    line-height: 42px;
    color: ${Colors.offWhite};
    margin: 0;
`
