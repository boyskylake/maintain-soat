<?php

namespace App\Http\Controllers\Officer\Linebot;

use App\Helpers\LineNotify;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use LINE\LINEBot\MessageBuilder\TemplateBuilder\ButtonTemplateBuilder;
use LINE\LINEBot\MessageBuilder\TemplateMessageBuilder;
use LINE\LINEBot\MessageBuilder\TextMessageBuilder;
use LINE\LINEBot\TemplateActionBuilder\UriTemplateActionBuilder;

class WebhookController extends Controller
{
    private $bot;
    private $http;

    public function __construct(LineNotify $line)
    {
        $this->bot = $line;
        $this->http = $line->httpClient;
    }

    public function hooks(Request $request)
    {
        $payload = $request->getContent();
        $validate = $this->bot->validateSignature($payload, $request->header('X_LINE_SIGNATURE'));
        if (!$validate) {
            return;
        }

        $events  = $this->bot->parseEventRequest($payload, $request->header('X_LINE_SIGNATURE'));
        $eventObj = $events[0];

        $reply = $eventObj->getreplytoken();
        $eventType = $eventObj->gettype();

        $textMessageBuilder = new TextMessageBuilder($reply);
        // $response = $this->bot->replyMessage($replyToken, $textMessageBuilder);

        // $response = LINEBot::broadcast($textMessageBuilder);

        $response = $this->bot->pushMessage("U8b8936bac40d23d5d7bb106baa3cdc87", $textMessageBuilder);
        if ($response->isSucceeded()) {
            echo 'Succeeded!';
            return;
        }
        logger("linebot failure : ", $request->json()->all());
        return;
    }

    public function CreateRichMenu($type = 0)
    {
        // $richMenuBuilder
        // $this->bot->createRichMenu();
    }

    public function linkAccount()
    {
        $response = $this->bot->createLinkToken("U8b8936bac40d23d5d7bb106baa3cdc87");
        $result = json_decode($response->getRawBody(), TRUE);

        $replyData = new TextMessageBuilder('https://www.example.com/link.php?linkToken=' . $result['linkToken']);
        // $actionBuilder = array(
        //     new UriTemplateActionBuilder(
        //         'Account Link', // ข้อความแสดงในปุ่ม
        //         'https://www.example.com/link.php?linkToken=' . $result['linkToken']
        //     )
        // );
        // $imageUrl = ''; //กำหนด url รุปภาพ ถ้ามี
        // $replyData = new TemplateMessageBuilder(
        //     'Button Template',
        //     new ButtonTemplateBuilder(
        //         'Account Link', // กำหนดหัวเรื่อง
        //         'Please select', // กำหนดรายละเอียด
        //         $imageUrl, // กำหนด url รุปภาพ
        //         $actionBuilder  // กำหนด action object
        //     )
        // );

        return $replyData;
    }
}
