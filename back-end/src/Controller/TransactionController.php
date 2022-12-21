<?php

namespace App\Controller;

use App\Repository\TransactionRepository;
use App\Entity\Transaction;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class TransactionController extends AbstractController
{
    private $transactionRepository;
    private $userRepository;
    private $

    public function __construct(TransactionRepository $transactionRepository, UserRepository $userRepository)
    {
        $this->transactionRepository = $transactionRepository;
        $this->userRepository = $userRepository;
    }

    #[Route('/transactions', methods: ['GET'])]
    public function getTransactions($userId)
    {   
        //$userId = session.userId
        $transactions = $this->transactionRepository->getTransactions($userId);
        $response = new JsonResponse($transactions);
        if ($transactions) {
            $response->setStatusCode(200);
        }   
        
        else {
            $response->setStatusCode(404);
        }

        return $response;
        
    }

    // #[Route('/user/{userId}/')]

    #[Route('/transaction', methods: ['POST'])]
    public function createTransaction(Request $request): JsonResponse
    {   
        $transaction = new Transaction();
        $json = json_decode($request->getContent());
        
        $transaction->setDate($json['date']);
        $transaction->setPrice($json['price']);
        $transaction->setName($json['name']);

        $transaction->setNewBalance($user->getBalance() - $json['price']);
        

        $response = new JsonResponse($transaction);
        if ($transaction) {
            $response->setStatusCode(200);
        }
        
        else {
            $response->setStatusCode(404);
        }

        return $response;
        
    }

    #[Route('/transaction/{transactionId}', methods: ['DELETE'])]
    public function deleteTransaction($transactionId)
    {   
        $transaction = $this->transactionRepository->find($transactionId);
        $this->transactionRepository->remove($transaction);
    }

    #[Route('/users/{userId}/transaction/{transactionId}', methods: ['PUT'])]
    public function editTransaction(Request $request, $userId, $transactionId)
    {
        $oldTransaction = $this->transactionRepository->find($transactionId);
        $newTransaction = new Transaction();
        $json = json_decode($request->getContent());
        $currBalance = $user->getBalance

        $newTransaction->setName($json['name'])->setDate($json['date'])->setPrice($json['price']);
        $newTransaction->setNewBalance();
        $this->transactionRepository->replace($oldTransaction, $newTransaction);
    }

    
}
