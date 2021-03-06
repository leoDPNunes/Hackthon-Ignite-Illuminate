import { container } from "tsyringe";

import { IMailProvider } from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";

container.registerInstance<IMailProvider>(
    "EtheralMailProvider",
    new EtherealMailProvider()
);
