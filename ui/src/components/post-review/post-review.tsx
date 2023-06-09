
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { Grid, GridItem, Stack, Input, Button,Text,Heading, Container, List, ListItem, ListIcon  } from "@chakra-ui/react"
import {
  Mina,
  isReady,
  Field,
  PublicKey,
  fetchAccount,
  PrivateKey,
} from 'snarkyjs';
import { ethers } from 'ethers'
import styles  from './styles/style.module.css';
import "../../pages/reactCOIServiceWorker";

import ZkappWorkerClient from "../../pages/zkappWorkerClient";
import MintNFT from "../../abi/MintNFT.json";
import { MdCheckCircle,MdCircle } from "react-icons/md";

const transactionFee = 0.1;
export const PostReview: FC = () => {
  const router = useRouter();

  const contractAddress = "0x1dbb068EF9c4C73F086DBec28aAa6F79CCb5F499";

  const comments = [{id: 1, bookId: 1, content: "This book is fantastic! It's the era of openness and transparency !", reviewer: "0xA09AD8cbA86AE23937e4e3E71F995F7C406a89ba"}, {id: 2, bookId: 1, content: "This book is not so good !", reviewer: "0xA09AD8cbA86AE23937e4e3E71F995F7C406a89ba"}, {id: 3, bookId: 1, content: "This is great !!", reviewer: "0xA09AD8cbA86AE23937e4e3E71F995F7C406a89ba"}]

  const [userAddress, setUserAddress] = useState('');
  const [review, setReview] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [bookDescription, setBookDescription] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [postedCId, setPostedCId] = useState<number>();

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const { ethereum } = window as any;
        if (!ethereum) {
          throw new Error('Please install MetaMask!');
        } else {
          console.log('MetaMask is installed!', ethereum);
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        setProvider(provider);

        const accounts = await provider.listAccounts();
        const currentAccount = accounts[0];
        setUserAddress(currentAccount);

        const connectedChainId = await provider.getNetwork().then((network) => network.chainId);
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: ethers.utils.hexValue(connectedChainId) }],
        });
      } catch (e) {
        console.log(e)
      }
    }
    connectWallet()
  }, [userAddress])

  const [tokenId, setTokenId] = useState<string>();

  useEffect(() => {
    const getBook = async () : Promise<void> => {
      try {
        const { ethereum } = window as any;
        if (!ethereum) {
          throw new Error('Please install MetaMask!');
        } else {
          console.log('MetaMask is installed!', ethereum);
        }

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, MintNFT.abi, signer);

        const currentUrl = router.asPath;
        const regex = /\/(\d+)$/;
        const match = currentUrl.match(regex);
        if (match) {
          setTokenId(match[1]);
        } else {
          console.log('数字が見つかりませんでした');
        }

        const book = await contract.getBookById(tokenId);
        setBookTitle(book?.title)
        setBookDescription(book?.description)

        const comments: string[] = await contract.getCommentsByBook(tokenId);
        setBookDescription(comments.join(', '))
      } catch (e) {
        console.log('エラー', e)
      }
    }
    getBook();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let [state, setState] = useState({
    zkappWorkerClient: null as null | ZkappWorkerClient,
    hasWallet: null as null | boolean,
    hasBeenSetup: false,
    accountExists: false,
    x: null as null | Field,
    verifiedCIds: null as null | number[],
    publicKey: null as null | PublicKey,
    zkappPublicKey: null as null | PublicKey,
    creatingTransaction: false,
  });

  const [secret1, setSecret1] = useState<string>();
  const [secret2, setSecret2] = useState<string>();
  const [cId, setCId] = useState<number>();

  console.log(secret1, typeof secret1);
  console.log(secret2, typeof secret2);

  useEffect(() => {
    (async () => {
      await isReady;
      const { BookReview } = await import('../../../../contracts/build/src/');

      const zkAppAddress = 'B62qpaEuAKao4hVdToyFawbZVuhdJNLm4LCWKQARCXZUAtsLPDsj4Xa';
      // This should be removed once the zkAppAddress is updated.
      if (!zkAppAddress) {
        console.error(
          'The following error is caused because the zkAppAddress has an empty string as the public key. Update the zkAppAddress with the public key for your zkApp account, or try this address for an example "Add" smart contract that we deployed to Berkeley Testnet: B62qqkb7hD1We6gEfrcqosKt9C398VLp1WXeTo1i9boPoqF7B1LxHg4'
        );
      }

      const zkApp = new BookReview(PublicKey.fromBase58(zkAppAddress));

    })();

    (async () => {
      if (!state.hasBeenSetup) {
        const zkappWorkerClient = new ZkappWorkerClient();

        console.log("Loading SnarkyJS...");
        await zkappWorkerClient.loadSnarkyJS();
        console.log("done");

      
        await zkappWorkerClient.setActiveInstanceToBerkeley();
        const mina = (window as any).mina;
        if (mina == null) {
          setState({ ...state, hasWallet: false });
          return;
        }
        const publicKeyBase58: string = (await mina.requestAccounts())[0];
        const publicKey = PublicKey.fromBase58(publicKeyBase58);
        console.log(publicKey);
        
        console.log('using key', publicKey.toBase58());
        console.log('checking if account exists...');
        const res = await zkappWorkerClient.fetchAccount({
          publicKey: publicKey!
        });
        const accountExists = res.error == null;
    
        await zkappWorkerClient.loadContract();
        console.log('compiling zkApp');
        await zkappWorkerClient.compileContract();
        console.log('zkApp compiled');
        const zkappPublicKey = PublicKey.fromBase58(
          'B62qpaEuAKao4hVdToyFawbZVuhdJNLm4LCWKQARCXZUAtsLPDsj4Xa'
        );
        await zkappWorkerClient.initZkappInstance(zkappPublicKey);
        console.log('getting zkApp state...');
        await zkappWorkerClient.fetchAccount({ publicKey: zkappPublicKey })
        const x = await zkappWorkerClient.getX();

        console.log('current state:', x);
        setState({
            ...state,
            zkappWorkerClient,
            hasWallet: true,
            hasBeenSetup: true,
            publicKey,
            zkappPublicKey,
            accountExists,
            x
        });
      }
      state.zkappWorkerClient && await onRefreshCurrentVerifiedCIds()
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.zkappWorkerClient]);

  // -------------------------------------------------------
  // Wait for account to exist, if it didn't
  useEffect(() => {
    (async () => {
      if (state.hasBeenSetup && !state.accountExists) {
        for (;;) {
          console.log('checking if account exists...');
          const res = await state.zkappWorkerClient!.fetchAccount({ 
            publicKey: state.publicKey!
          })
          const accountExists = res.error == null;
          if (accountExists) {
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 5000));
        }
        setState({ ...state, accountExists: true });
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.hasBeenSetup]);

  // -------------------------------------------------------
  // Send a transaction
  const onSendSetSecretTransaction = async () => {
    setState({ ...state, creatingTransaction: true });
    console.log('sending a transaction...');
    await state.zkappWorkerClient!.fetchAccount({
      publicKey: state.publicKey!
    });
    if(!secret1 || !secret2)return;
    await state.zkappWorkerClient!.createSetSecretTransaction({secret1,secret2});
    console.log('creating proof...');
    await state.zkappWorkerClient!.proveUpdateTransaction();
    console.log('getting Transaction JSON...');
    const transactionJSON = await state.zkappWorkerClient!.getTransactionJSON()
    console.log('requesting send transaction...');
    const { hash } = await (window as any).mina.sendTransaction({
      transaction: transactionJSON,
      feePayer: {
        fee: transactionFee,
        memo: '',
      },
    });
    console.log(
      'See transaction at https://berkeley.minaexplorer.com/transaction/' + hash
    );
    setState({ ...state, creatingTransaction: false });
  }

    // Send a transaction
    const onSendProveReadingTransaction = async () => {
      setState({ ...state, creatingTransaction: true });
      console.log('sending a transaction...');
      await state.zkappWorkerClient!.fetchAccount({
        publicKey: state.publicKey!
      });
      if(!secret1 || !secret2 || !cId)return;
      await state.zkappWorkerClient!.createProveReadingTransaction({cId, secret1,secret2,});
      console.log('creating proof...');
      await state.zkappWorkerClient!.proveUpdateTransaction();
      console.log('getting Transaction JSON...');
      const transactionJSON = await state.zkappWorkerClient!.getTransactionJSON()
      console.log('requesting send transaction...');
      const { hash } = await (window as any).mina.sendTransaction({
        transaction: transactionJSON,
        feePayer: {
          fee: transactionFee,
          memo: '',
        },
      });
      console.log(
        'See transaction at https://berkeley.minaexplorer.com/transaction/' + hash
      );
      setState({ ...state, creatingTransaction: false });
    }


  const handleChange1 = (e: { target: { value: string | undefined; }; }) => {
    setSecret1(() => e.target.value)
  }
  const handleChange2 = (e: { target: { value: string | undefined; }; }) => {
    setSecret2(() => e.target.value)
  }
  const handleChangeCId = (e: { target: { value: string | undefined; }; }) => {
    setCId(() => Number(e.target.value))
  }
  // -------------------------------------------------------

  // -------------------------------------------------------
  // Refresh the current state
  const onRefreshCurrentHash = async () => {
    console.log('getting zkApp state...');
    await state.zkappWorkerClient!.fetchAccount({
         publicKey: state.zkappPublicKey!
    })
    const x = await state.zkappWorkerClient!.getX();
    console.log('current state:', x);
    setState({ ...state, x });
  }

  const onRefreshCurrentVerifiedCIds = async () => {
    console.log('getting zkApp state...');
    const verifiedCId1 = await state.zkappWorkerClient!.getVerifiedCId1();
    const verifiedCId2 = await state.zkappWorkerClient!.getVerifiedCId2();
    const verifiedCId3 = await state.zkappWorkerClient!.getVerifiedCId3();
    const verifiedCId4 = await state.zkappWorkerClient!.getVerifiedCId4();
    const verifiedCId5 = await state.zkappWorkerClient!.getVerifiedCId5();
    const verifiedCId6 = await state.zkappWorkerClient!.getVerifiedCId6();
    const verifiedCId7 = await state.zkappWorkerClient!.getVerifiedCId7();
    const verifiedCIds = [Number(verifiedCId1.toString()), Number(verifiedCId2.toString()), Number(verifiedCId3.toString()), Number(verifiedCId4.toString()), Number(verifiedCId5.toString()), Number(verifiedCId6.toString()), Number(verifiedCId7.toString())].filter(ele=>ele !== 0);
    
    console.log(verifiedCIds);
    
    setState({ ...state, verifiedCIds });
  }
  // -------------------------------------------------------...

  
 // -------------------------------------------------------
  // Create UI elements

  let hasWallet;
  if (state.hasWallet != null && !state.hasWallet) {
    const auroLink = 'https://www.aurowallet.com/';
    const auroLinkElem = (
      <a href={auroLink} target="_blank" rel="noreferrer">
        {' '}
        [Link]{' '}
      </a>
    );
    hasWallet = (
      <div>
        {' '}
        Could not find a wallet. Install Auro wallet here: {auroLinkElem}
      </div>
    );
  }

  let setupText = state.hasBeenSetup
    ? ''
    : 'Setting up SnarkyJS...';
  let setup = (
    <div>
      {' '}
      {setupText} {hasWallet}
    </div>
  );

  let accountDoesNotExist;
  if (state.hasBeenSetup && !state.accountExists) {
    const faucetLink =
      'https://faucet.minaprotocol.com/?address=' + state.publicKey!.toBase58();
    accountDoesNotExist = (
      <div>
        Account does not exist. Please visit the faucet to fund this account
        <a href={faucetLink} target="_blank" rel="noreferrer">
          {' '}
          [Link]{' '}
        </a>
      </div>
    );
  }

  let mainContent;
  if (state.hasBeenSetup && state.accountExists) {
    mainContent = (
      <Container maxW='2xl'>
        {/* <Heading as='h2' size='2xl'>set secret</Heading> */}
        <Heading as='h2' size='2xl'>ZKP</Heading>
        <Stack spacing={4} className={styles.formStack}>

        <Text>Q1. What is the fourth step to run the network ?</Text>
        <Input value={secret1} onChange={handleChange1} type="text"/>
        <Text>Q2. Please copy and paste the first paragraph under the heading 6. Incentive</Text>
        <Input value={secret2} onChange={handleChange2} type="text" />
        <Text>Please input your commentId</Text>
        <Input value={cId} onChange={handleChangeCId} type="text"/>
          </Stack>
        {/* <Stack align='end' className={styles.minaTransactionStack}>

        <Button 
        onClick={onSendSetSecretTransaction}
        disabled={state.creatingTransaction}
        colorScheme='green'   
        >
                    {' '}
          Send Transaction{' '}
        </Button>
        </Stack> */}
        <Stack align='end' className={styles.minaTransactionStack}>

        <Button
          onClick={onSendProveReadingTransaction}
          disabled={state.creatingTransaction}
          colorScheme='green'
          >
          {' '}
          Send Transaction{' '}
        </Button>
          </Stack>
        {/* <div> Current Number in zkApp: {state.x?.toString()} </div>
        <button onClick={onRefreshCurrentHash}> Get Latest State </button>
      
        <div> Current Verified CId in zkApp:</div>
        {state.verifiedCIds?.map((ele,i)=>(
          <div key={i}>{ele.toString()}</div>
        ))}
        <button onClick={onRefreshCurrentVerifiedCIds}> Get Latest State </button> */}
      </Container>
    );
  }

  // ------------------------------

  // post review -----------------------------------
  const postReview = async (review: string) : Promise<void> => {
    try {
      const { ethereum } = window as any;
      if (!ethereum) {
        throw new Error('Please install MetaMask!');
      } else {
        console.log('MetaMask is installed!', ethereum);
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, MintNFT.abi, signer);

      const res = await contract.addComment(tokenId, review, userAddress);
      setPostedCId(()=>res.commentId);
      console.log("res: ", res)
    } catch (e) {
      console.log('エラー', e)
    }
  }

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };
  // ----------------------------------


  return (
    <Container maxW='2xl'>
      <Heading as='h2' size='2xl' className={styles.h2}>Post your comment</Heading>
        <Stack direction='row'>
          <Image src={`/${tokenId}.png`} width={150} height={200} alt="logo" className={styles.img} />
          <div className={styles.alignItemsCenter}>
            <div>

            <Heading as='h3' size='lg'>title</Heading>
            <Text fontSize='xl'>Bitcoin: A Peer-to-Peer Electronic Cash System
</Text>
            <Heading as='h3' size='lg'>description</Heading>
            <Text fontSize='md'>Written by Satoshi Nakamoto</Text>
            </div>
          </div>
      </Stack>
      <Stack>
        <Text>Comments</Text>
        <List>
        {comments.map((comment,i)=>(
          <ListItem key={i}>
            {state.verifiedCIds?.includes(i+1) ? <ListIcon as={MdCheckCircle} color='green.500'/> : <ListIcon as={MdCircle} color='gray.500' />}
          
          {comment.content}
        </ListItem>
        ))}
        </List>
      </Stack>
      <Stack direction="column" spacing={2} className={styles.formStack}>
        <Text>Comment !</Text>
        <Stack align='center'>
          <Input type="text" value={review} onChange={handleReviewChange} height='5rem'/>
        </Stack>
        <Stack align='end'>
          <Button onClick={() => postReview(review)} colorScheme='green'>post review</Button>
        </Stack>
      </Stack>
    <Text>{postedCId && `CommentId you just now submitted : ${postedCId}`}</Text>
        {setup}
        {accountDoesNotExist}
        {mainContent}
    </Container>
  );
}

