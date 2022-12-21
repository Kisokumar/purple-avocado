<?php

namespace App\Controller;

use App\Repository\TransactionRepository;
use App\Entity\Transaction;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\Annotation\Route;


class TransactionController extends AbstractController
{
    private $transactionRepository;
    private $requestStack;
  
    public function __construct(TransactionRepository $transactionRepository, RequestStack $requestStack)
    {
        $this->transactionRepository = $transactionRepository;
        $this->requestStack = $requestStack;
    }

    #[Route('/transactions', methods: ['GET'])]
    public function getTransactions($userId)
    {   
        $userId = $this->requestStack->getSession()->get('userId');
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

    

    #[Route('/transaction', methods: ['POST'])]
    public function createTransaction(Request $request): JsonResponse
    {   
        $transaction = new Transaction();
        $json = json_decode($request->getContent());
        
        $transaction->setDate($json['date']);
        $transaction->setPrice($json['price']);
        $transaction->setName($json['name']);

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

        $response = new JsonResponse();
        $response->setStatusCode(200);
        return $response;
    }

    #[Route('/transactions/{transactionId}', methods: ['PUT'])]
    public function editTransaction(Request $request, $transactionId)
    {
        $oldTransaction = $this->transactionRepository->find($transactionId);
        $newTransaction = new Transaction();
        $json = json_decode($request->getContent());

        $newTransaction->setName($json['name'])->setDate($json['date'])->setPrice($json['price']);
        $this->transactionRepository->replace($oldTransaction, $newTransaction);

        $response = new JsonResponse();
        $response->setStatusCode(200);
        return $response;
    }

    
}
