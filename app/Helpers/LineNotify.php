<?php

namespace App\Helpers;

// use Illuminate\Support\Facades\Request;
use LINE\LINEBot;
use LINE\LINEBot\HTTPClient\CurlHTTPClient;
// use LINE\LINEBot\HTTPClient\GuzzleHTTPClient;

class LineNotify extends LINEBot
{
    public $httpClient;

    public function __construct()
    {

        $this->config = [
            'channelId' => env('LINE_BOT_CHANNEL_ACCESS_TOKEN'),
            'channelSecret' => env('LINE_BOT_CHANNEL_SECRET'),
        ];

        $this->httpClient = new CurlHTTPClient($this->config['channelId']);
        // $this->line = new \LINE\LINEBot($httpClient, ['channelSecret' => $this->config->channelSecret]);

        parent::__construct($this->httpClient, ['channelSecret' => $this->config['channelSecret']]);
    }

    public function send($line)
    {
        if ($line->isSucceeded()) {
            // echo 'Succeeded!';
            return true;
        }

        // Failed
        // echo $line->getHTTPStatus() . ' ' . $line->getRawBody();
        return false;
    }
}
