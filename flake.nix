{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    systems.url = "github:nix-systems/default";
    devenv.url = "github:cachix/devenv";
  };

  nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
  };

  outputs =
    {
      self,
      nixpkgs,
      devenv,
      systems,
      ...
    }@inputs:
    let
      forEachSystem = nixpkgs.lib.genAttrs (import systems);
    in
    {
      devShells = forEachSystem (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
          nodejs-packages = with pkgs.nodePackages; [
            vscode-langservers-extracted
            typescript-language-server
          ];
        in
        {
          default = devenv.lib.mkShell {
            inherit inputs pkgs;
            modules = [
              {
                dotenv.enable = true;
                packages = with pkgs; [ ] ++ nodejs-packages;
                languages = {
                  javascript = {
                    enable = true;
                    bun = {
                      enable = true;
                      install.enable = true;
                    };
                  };
                  typescript = {
                    enable = true;
                  };
                };
              }
            ];
          };
        }
      );
    };
}
